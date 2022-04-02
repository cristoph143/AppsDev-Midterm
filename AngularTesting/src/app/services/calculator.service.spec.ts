import { TestBed } from '@angular/core/testing';
import { CalculatorService } from './calculator.services';
import { LoggerService } from './logger.service';

// focus on specific test cases using fit()
fdescribe('CalculatorService/Bohol,Cristopher', () => {
    let calculator: CalculatorService;
    let logger: LoggerService;
    let loggerspy: any;
    beforeEach(() => {
        console.log("beforeEach");
        // create a new instance of CalculatorService before each test
        // this is a good practice to avoid side effects
        // logger = new LoggerService();
        // calculator = new CalculatorService(logger);
        loggerspy = jasmine.createSpyObj('LoggerService', ['log', 'warn', 'errorMessage']);
        
        TestBed.configureTestingModule({
            providers: [
                CalculatorService,
                { 
                    provide: LoggerService, 
                    useValue: loggerspy 
                }
            ]
        });
        calculator = TestBed.inject(CalculatorService);
    });

    it('should add 2 numbers', () => {
        console.log("add each");
        let result = calculator.add(2,2);
        // spies are a way to check if a function was called or to provide
        // a custom return value
        // spyOn(logger, 'log');
        // expect(logger.log).toHaveBeenCalled();
        // logger.log has been called and addition operation called is an argument
        // expect(logger.log).toHaveBeenCalledWith('Addition operation called');
        // expect(logger.log).toHaveBeenCalledTimes(1);
        
        expect(loggerspy.log).toHaveBeenCalled();
        expect(loggerspy.log).toHaveBeenCalledWith('Addition operation called');
        expect(loggerspy.log).toHaveBeenCalledTimes(1);
        
        expect(result).toBe(4);
        expect(result).not.toBe(5);

    });
    it('should add 2 numbers', () => {
        let result = calculator.add(2, 2);
        expect(result).toBe(4);
    });
    // disable test without commenting out by using xit()
    xit('should add 2 numbers', () => {
        let result = calculator.add(2, 2);
        expect(result).toBe(4);
    });
    it('should subtract 2 numbers', () => {
        let result = calculator.subtract(2, 2);
        expect(result).toBe(0);
    });
    it('should divide 2 numbers', () => {
        let result = calculator.divide(2, 2);
        expect(result).toBe(1);
    });
    it('should return `Cannot divide by 0` when n2 = 0', () => {
        let result = calculator.divide(2, 0);
        expect(result).toBe('Cannot divide by 0');
    });
    it('should multiply 2 numbers', () => {
        let result = calculator.multiply(2, 2);
        expect(result).toBe(4);
    });
    it('should return 1 when dividing 5 and 5', () => {
        let result = calculator.divide(5, 5);
        expect(result).toBe(1);
    });
    it('should not return 2 when dividing 5 and 5', () => {
        let result = calculator.divide(5, 5);
        expect(result).not.toBe(2);
    });
    it('should return 1 when testFunction is called with 1', () => {
        let result = calculator.testFunction(1);
        expect(result).toBe(1);
    });
    it('should return 2 when testFunction is called with 2', () => {
        let result = calculator.testFunction(2);
        expect(result).toBe(2);
    });
    it('should return 3 when testFunction is called with another number aside from 1 and 2', () => {
        let result = calculator.testFunction(3);
        expect(result).toBe(3);
    });
});