const { describe, expect, it } = require('@jest/globals');
const { somar } = require("../Exercicios/um");

describe('Testes do primeiro exercício', () => {
    
    beforeAll(async () => {
        console.info('Iniciando TDD com Jest!');
    });

    afterAll(() => {
        console.info('Testes Encerrados!');
    });
  
    it('Deve somar dois números', () => {
        const result = somar(1, 2);
        expect(result).toBe(5);
    });


    // () => serve pra atrasar função

});