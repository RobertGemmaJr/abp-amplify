import React from "react"
import { makeStyles } from "@material-ui/styles";
import { Box, ButtonGroup, Button, Popper, Grow, Paper, ClickAwayListener, MenuList, MenuItem } from "@material-ui/core";
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';

const useStyles = makeStyles(theme => ({
  bGroup: {
    
  }
}))

export default function AddQButton() {
  const classes = useStyles();
  const options = [
    "Add T/F Question",
    "Add Text Question",
  ];
  
  const [open, setOpen] = React.useState(false);
  const anchorRef = React.useRef(null);
  const [selectedIndex, setSelectedIndex] = React.useState(0);

  // Handle actual button click
  function handleClick() {
    console.info(`You clicked ${options[selectedIndex]}`);
  };

  const handleMenuItemClick = (event, index) => {
    setSelectedIndex(index);
    setOpen(false);
  };

  // Toggles dropdown
  const handleToggle = () => {
    setOpen((prevOpen) => !prevOpen);
  };

  // Closes on click away
  const handleClose = (event) => {
    if (anchorRef.current && anchorRef.current.contains(event.target)) {
      return;
    }
    setOpen(false);
  };

  return (
    <Box>
        <ButtonGroup 
          variant="contained" 
          color="secondary" 
          ref={anchorRef} 
          aria-label="split button"
          className={classes.bGroup}
        >
          {/* Button */}
          <Button onClick={() => handleClick()}>
            {options[selectedIndex]}
          </Button>

          {/* Drop Down button */}
          <Button
            color="secondary"
            size="small"
            aria-controls={open ? 'split-button-menu' : undefined}
            aria-expanded={open ? 'true' : undefined}
            aria-label="select merge strategy"
            aria-haspopup="menu"
            onClick={handleToggle}
          >
            <ArrowDropDownIcon />
          </Button>
        </ButtonGroup>

        {/* Drop down */}
        <Popper 
          open={open} 
          anchorEl={anchorRef.current} 
          role={undefined} 
          transition disablePortal
        >
          {({ TransitionProps, placement }) => (
            <Grow
              {...TransitionProps}
              style={{
                transformOrigin: placement === 'bottom' ? 'center top' : 'center bottom',
              }}
            >
              <Paper>
                <ClickAwayListener onClickAway={handleClose}>
                  <MenuList id="split-button-menu">
                    {options.map((option, index) => (
                      <MenuItem
                        key={option}
                        selected={index === selectedIndex}
                        onClick={(event) => handleMenuItemClick(event, index)}
                      >
                        {option}
                      </MenuItem>
                    ))}
                  </MenuList>
                </ClickAwayListener>
              </Paper>
            </Grow>
          )}
        </Popper>
    </Box>
  );
}