import React from 'react';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Header from '../components/Header';
import UnitDetail from '../components/UnitDetail';
import { Container, Box } from '@mui/material';

const UnitDetailPage = () => {
  const { unitId } = useParams();
  const unit = useSelector((state) =>
    state.units.units.find((unit) => unit.id === parseInt(unitId))
  );

  if (!unit) return <div>Unit not found</div>;

  return (
    <div>
      <Header />
      <Container>
        <Box my={4}>
          <UnitDetail unit={unit} />
        </Box>
      </Container>
    </div>
  );
};

export default UnitDetailPage;
