import React, { useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';

import useStyles from './styles';

export default function Header() {
  const classes = useStyles();
  const incomeIn = useSelector((state) => state.incomeIn);
  const incomeOut = useSelector((state) => state.incomeOut);

  const total = useMemo(() => {
    const totalIn = incomeIn.reduce((current, next) => {
      const result = parseInt(current.value, 10) + parseInt(next.value, 10);
      return result;
    }, { value: 0 });

    const totalOut = incomeOut.reduce((current, next) => {
      const result = parseInt(current.value, 10) + parseInt(next.value, 10);
      return result;
    }, { value: 0 });

    return totalIn - totalOut;
  }, [incomeIn, incomeOut]);

  return (
    <div className={classes.root}>
      <AppBar position="static" color="secondary">
        <Toolbar>
          <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
            LOGO
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            Controle de dinheiro
          </Typography>
          <Typography variant="h6">
            Saldo atual R$
            {' '}
            {total}
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
}
