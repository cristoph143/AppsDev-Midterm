import { CalculatorService } from './calculator.services';
import { LoggerService } from './logger.service';

fdescribe('CalculatorService/Bohol,Cristopher', () => {
    it('should add 2 numbers', () => {
        let calculator = new CalculatorService(new LoggerService());
        let result = calculator.add(2, 2);
        expect(result).toBe(4);
    });
    it('should subtract 2 numbers', () => {
        let calculator = new CalculatorService(new LoggerService());
        let result = calculator.subtract(2, 2);
        expect(result).toBe(0);
    });
    it('should divide 2 numbers', () => {
        let calculator = new CalculatorService(new LoggerService());
        let result = calculator.divide(2, 2);
        expect(result).toBe(1);
    });
    it('should multiply 2 numbers', () => {
        let calculator = new CalculatorService(new LoggerService());
        let result = calculator.multiply(2, 2);
        expect(result).toBe(4);
    });
});