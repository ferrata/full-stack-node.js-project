import { ListItem, Link, Typography, ListItemText } from "@mui/material";

export const Participant = (props: any) => {
  const { participant } = props;
  const { name, surname, email, date_of_registration } = participant;

  return (
    <>
      <ListItem
        sx={{
          width: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexWrap: "nowrap",
          flexDirection: "column",
        }}
      >
        <ListItemText
          primary={`${name} ${surname}`}
          secondary={
            <>
              <Link variant="body2" color="text.secondary" href={email}>
                {email}
              </Link>
              <br />
              <Typography
                component="span"
                variant="body2"
                color="text.secondary"
              >
                Registered {new Date(date_of_registration).toDateString()}
              </Typography>
            </>
          }
        />
      </ListItem>
    </>
  );
};
