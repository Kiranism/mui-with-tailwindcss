import { GitHub, Instagram, LinkedIn, Twitter } from "@mui/icons-material";
import { Button, Container, Typography } from "@mui/material";
import React from "react";
import programmer from "../../assets/images/programmer.svg";

const Hero = () => {
  return (
    <div className="bg-black bg-opacity-80 p-5 min-h-screen">
      <Container maxWidth="lg" className="pt-10">
        <div className="flex flex-col md:flex-row items-center">
          <div className="flex-1">
            <Typography variant="h1" className="font-advent font-bold">
              I WRITE CODE
            </Typography>

            <div className="flex gap-2">
              <Instagram
                className="text-4xl hover:text-green-700 focus:text-green-700"
                onClick={() => window.open("https://instagram.com/ki_r_an._")}
              />
              <Twitter
                className="text-4xl hover:text-green-700 focus:text-green-700"
                onClick={() => window.open("https://twitter.com/thedvlpr")}
              />
              <GitHub
                className="text-4xl hover:text-green-700 focus:text-green-700"
                onClick={() => window.open("https://github.com/kiranism")}
              />
              <LinkedIn
                className="text-4xl hover:text-green-700 focus:text-green-700"
                onClick={() =>
                  window.open("https://www.linkedin.com/in/kiranism")
                }
              />
            </div>
          </div>
          <div className="flex-1">
            <img src={programmer} className="w-96 md:w-full object-cover" />
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Hero;
