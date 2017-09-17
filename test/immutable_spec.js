import {expect} from 'chai';
import {List, Map} from 'immutable';

describe('immutability', () => {

    describe('A List', () => {

        function addCar(currentState, car) {
            return currentState.push(car);
        }

        it('is immutable', () => {
            let state = List.of('Ferrari', 'Porsche');
            let nextState = addCar(state, 'Lotus');

            expect(nextState).to.equal(List.of(
                'Ferrari',
                'Porsche',
                'Lotus'
            ));
            expect(state).to.equal(List.of(
                'Ferrari',
                'Porsche'
            ));
        });

    });

    describe('a tree', () => {
        
        function addCar(currentState, car) {
            return currentState.set(
                'cars',
                currentState.get('cars').push(car)
            );
        }

        it('is immutable', () => {
            let state = Map({
                cars: List.of('Ferrari', 'Porsche')
            });
            let nextState = addCar(state, 'Lotus');

            expect(nextState).to.equal(Map({
                cars: List.of(
                'Ferrari',
                'Porsche',
                'Lotus'
                )
            }));
            expect(state).to.equal(Map({
                cars: List.of(
                'Ferrari',
                'Porsche'
                )
            }));
        });

    });

});