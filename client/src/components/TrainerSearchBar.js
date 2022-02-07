import * as React from "react";
import TextField from "@mui/material/TextField";
import Stack from "@mui/material/Stack";
import Autocomplete from "@mui/material/Autocomplete";

export default function FreeSolo({ trainers, word, setWord }) {
  const trainersArray = trainers ? trainers : [];
  return (
    <div className="searchBarMainContainer">
      <Stack spacing={2} sx={{ width: 300 }}>
        <Autocomplete
          freeSolo
          id="free-solo-2-demo"
          disableClearable
          onChange={(e) => {
            setWord(e.target.innerHTML);
          }}
          options={trainersArray.map((option) => option.name)}
          renderInput={(params) => (
            <TextField
              {...params}
              onChange={(e) => {
                setWord(e.target.value);
              }}
              label="Search input"
              InputProps={{
                ...params.InputProps,
                type: "search",
              }}
            />
          )}
        />
      </Stack>
    </div>
  );
}
