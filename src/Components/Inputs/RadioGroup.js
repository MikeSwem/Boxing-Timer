import React from "react";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";
import FormLabel from "@material-ui/core/FormLabel";

export default function RadioButtonsGroup({ label, name }) {
  const [value, setValue] = React.useState("Traditional");

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  return (
    <FormControl component="fieldset">
      <FormLabel component="legend">
        <code>{label}</code>
      </FormLabel>
      <RadioGroup
        aria-label={label}
        name={name}
        value={value}
        onChange={handleChange}
      >
        <FormControlLabel
          value="Traditional"
          control={<Radio />}
          label="Traditional"
        />
        <FormControlLabel value="Monkey" control={<Radio />} label="Monkey" />
        <FormControlLabel
          value="Shia Labeouf"
          control={<Radio />}
          label="Shia Labeouf"
        />
      </RadioGroup>
    </FormControl>
  );
}
