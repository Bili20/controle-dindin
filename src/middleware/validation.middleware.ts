import { plainToClass } from "class-transformer";
import { validate, ValidationError } from "class-validator";
import { Request, Response, NextFunction } from "express";

export function validationMiddleware<T extends object>(
  dtoClass: new () => T,
  source: "body" | "params" | "query" = "body"
): (req: Request, res: Response, next: NextFunction) => Promise<void> {
  return async (req: Request, res: Response, next: NextFunction) => {
    // Converte o body da requisição para uma instância do DTO
    const data = req[source];
    const dtoInstance = plainToClass(dtoClass, data);

    // Valida os dados
    const errors: ValidationError[] = await validate(dtoInstance, {
      skipMissingProperties: false,
      whitelist: true,
      forbidNonWhitelisted: true,
    });

    if (errors.length > 0) {
      // Extrai mensagens de erro
      const errorMessages = errors.flatMap((error) =>
        Object.values(error.constraints || {})
      );
      res.status(400).json({ errors: errorMessages });
      return;
    }

    next();
  };
}
