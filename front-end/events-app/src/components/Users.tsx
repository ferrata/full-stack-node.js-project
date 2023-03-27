import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { DataGrid, GridColDef, GridValueGetterParams } from "@mui/x-data-grid";
import { Link, Button, Box, Typography } from "@mui/material";

export const Users = () => {
  const [users, setUsers] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetch("http://localhost:5000/users", {
      headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
    })
      .then((res) => res.json())
      .then((data) => {
        setUsers(data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const columns: GridColDef[] = [
    { field: "id", headerName: "ID", width: 100 },
    { field: "name", headerName: "First name", width: 150 },
    { field: "surname", headerName: "Last name", width: 150 },
    {
      field: "email",
      headerName: "Email",
      width: 200,
      renderCell: (params: any) => (
        <>
          <Link
            variant="body2"
            color="text.secondary"
            href={params.value || "#"}
          >
            {params.value || "No email"}
          </Link>
        </>
      ),
    },
    {
      field: "date_of_birth",
      headerName: "Date of birth",
      width: 120,
      align: "right",
      valueGetter: (params: GridValueGetterParams) =>
        params.value
          ? new Date(params.value as string).toLocaleDateString()
          : "",
    },
    {
      field: "age",
      headerName: "Age",
      type: "number",
      align: "right",
      width: 100,
    },
  ];

  return (
    <>
      <Typography
        variant="h1"
        component="h1"
        sx={{ textAlign: "center", margin: "1rem" }}
      >
        Users
      </Typography>

      <Box
        sx={{
          display: "flex",
          justifyContent: "right",
          alignItems: "right",
          flexWrap: "nowrap",
          flexDirection: { xs: "column", sm: "row" },
        }}
      >
        <Button
          variant="contained"
          sx={{ margin: "1rem" }}
          onClick={() => {
            navigate("/users/create");
          }}
        >
          Create User
        </Button>
      </Box>

      <div style={{ height: 400, width: "100%" }}>
        <DataGrid rows={users} columns={columns} />
      </div>
    </>
  );
};
