import { createValueDto } from "../../models/dtos/values/create_values.dto";
import { IValuesRepository } from "../../models/interfaces/values_repository.interface";
import { IValues } from "../../models/values";
import { UpdateValueMonthService } from "../objective_month/update_value.service";

export class CreateValuesService {
  constructor(
    private readonly valuerepository: IValuesRepository,
    private readonly UpdateValueService: UpdateValueMonthService
  ) {}

  async execute(values: createValueDto): Promise<IValues> {
    const dataValues = {
      name: values.name,
      value: values.value,
      user_id: values.user_id,
      objective_month_id: values.objective_month_id,
      created_at: new Date(),
    } as IValues;
    try {
      const createdValue = await this.valuerepository.create(dataValues);
      await this.UpdateValueService.execute({
        id: createdValue.objective_month_id,
        value: createdValue.value,
      });
      return createdValue;
    } catch (e) {
      console.log(e);
      throw new Error("Erro ao criar o valor");
    }
  }
}
