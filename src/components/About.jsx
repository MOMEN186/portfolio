import { Grid, Typography } from "@mui/material";

export default function About() {
  return (
    <Grid display="flex" height="100vh" container>
          <Grid sx={{
              display: "flex",
              flexDirection: "column",
              width: "100%",
              justifyContent: "center",
              alignItems: "center",
                rowGap:"20px"
          }}>
              <Typography>ABOUT ME</Typography>
              <Typography sx={{  width:"75%",textAlign:"center"}}>
          I’m Momen, a full-stack software engineer (BSc, 2024) who builds
          end-to-end web apps with the MERN stack, PostgreSQL and Django REST.
          I’ve cloned Jira to master project workflows, deployed
          community-driven systems on Vercel/Neon, and automated tasks with
          Selenium. Comfortable working independently on clean, intuitive UIs
          and scalable backends, I’m always optimizing performance—from MongoDB
          token-blacklisting to Spark pipelines. I’m now seeking opportunities
          to leverage my skills in crafting user-centered, maintainable
          products.
        </Typography>
      </Grid>
    </Grid>
  );
}
