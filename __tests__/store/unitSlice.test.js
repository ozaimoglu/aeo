import unitReducer, {
  fetchUnitsSuccess,
  fetchUnitsRequest,
  fetchUnitsFailure
} from '../../src/store/slices/unitSlice';

const units = [
    {
      id: 1,
      name: "Archer",
      age: "Feudal",
      cost: { Wood: 25, Gold: 45 }
    },
    {
      id: 2,
      name: "Knight",
      age: "Castle",
      cost: { Food: 60, Gold: 75 }
    }
  ];

test('should return the initial state', () => {
    expect(unitReducer(undefined, { type: 'unknown' })).toEqual({
        units: [],
        loading: false,
        error: null
      })
})

test('should handle fetchUnitsSuccess', () => {
    const previousState = {
        units: [],
        loading: false,
        error: null
    }

    expect(unitReducer(previousState, fetchUnitsSuccess(units))).toEqual({
        units: units,
        loading: false,
        error: null,
    })
})

test('should handle fetchUnitsRequest', () => {
    const previousState = {
        units: [],
        loading: false,
        error: null
    }

    expect(unitReducer(previousState, fetchUnitsRequest())).toEqual({
        units: [],
        loading: true,
        error: null
    })
})

test('should handle fetchUnitsFailure', () => {
    const previousState = {
        units: [],
        loading: false,
        error: null
    }

    expect(unitReducer(previousState, fetchUnitsFailure("Error"))).toEqual({
        units: [],
        loading: false,
        error: "Error"
    })
})
