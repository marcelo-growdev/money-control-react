import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';

import {
  Grid, Typography, IconButton, Card, Toolbar,
  TextField, FormControl, InputLabel, Select,
  CardContent, CardActions, Button, Box, MenuItem,
} from '@material-ui/core';
import { ArrowBack } from '@material-ui/icons';

import Alert from '../../components/alert';
import useStyles from './styles';
// import { setAlert } from '../../store/modules/alert/actions';
import { addOne as addOneIn } from '../../store/income-in/incomeInSlice';
import { addOne as addOneOut } from '../../store/income-out/incomeOutSlice';

export default function Register() {
  const classes = useStyles();
  const dispatch = useDispatch();

  const [type, setType] = useState(1);
  const [value, setValue] = useState('');
  const [description, setDescription] = useState('');
  const [showAlert, setShowAlert] = useState(false);

  const handleChangeSelect = (event) => {
    setType(event.target.value);
  };

  const handleChangeInput = (event, input) => {
    if (input === 'description') {
      setDescription(event.target.value);
    } else {
      setValue(event.target.value);
    }
  };

  const handleReset = () => {
    setType(1);
    setDescription('');
    setValue('');
  };

  const handleSubmit = () => {
    if (type === 1) {
      dispatch(addOneIn({ uid: 1, description, value }));
    } else {
      dispatch(addOneOut({ uid: 2, description, value }));
    }
    // dispatch(setAlert(true));

    handleReset();
  };

  return (
    <Grid item>
      <Toolbar>
        <Link to="/">
          <IconButton aria-label="back" component="span">
            <ArrowBack />
          </IconButton>
        </Link>
        <Typography variant="h6">
          Voltar
        </Typography>
      </Toolbar>

      <Alert type="success" msg="Cdastrado com sucesso!" />

      <Grid item container spacing={3} alignItems="center" justify="center">
        <Grid item xs={12}>
          <Typography variant="h4" align="center">Cadastrar um lançamento</Typography>
        </Grid>
        <Grid item xs={12} md={6}>
          <Card>

            <CardContent>
              <Typography gutterBottom className={classes.titleInfo}>
                Utilize o formulário abaixo para cadastrar suas saídas e entradas.
              </Typography>
              <Box p={1}>
                <TextField onChange={(e) => handleChangeInput(e, 'description')} value={description} fullWidth label="Descrição" variant="outlined" />
              </Box>
              <Box p={1}>
                <TextField onChange={(e) => handleChangeInput(e, 'valeu')} value={value} type="number" fullWidth label="R$ valor" variant="outlined" />
              </Box>
              <Box p={1}>
                <FormControl variant="outlined" fullWidth className={classes.formControl}>
                  <InputLabel id="demo-simple-select-outlined-label">Tipo</InputLabel>
                  <Select
                    labelId="demo-simple-select-outlined-label"
                    id="demo-simple-select-outlined"
                    value={type}
                    onChange={handleChangeSelect}
                    label="Age"
                  >
                    <MenuItem value={1}>Entrada</MenuItem>
                    <MenuItem value={2}>Saída</MenuItem>
                  </Select>
                </FormControl>
              </Box>
            </CardContent>

            <CardActions className={classes.actions}>

              <Box alignSelf="flex-start">
                <Button variant="outlined" onClick={handleReset} color="secondary">
                  limpar
                </Button>
              </Box>
              <Box alignSelf="flex-end">
                <Button variant="contained" onClick={handleSubmit} color="secondary">
                  cadastrar
                </Button>
              </Box>

            </CardActions>
          </Card>
        </Grid>
      </Grid>

    </Grid>
  );
}
