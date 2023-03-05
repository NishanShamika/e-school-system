import { Option } from './option';

export class Question {
    id: number;
    name: string;
    questionTypeId: number;
    answer:string;
    options: Option[];
    answered: string;

    constructor(data: any) {
        data = data || {};
        this.id = data.id;
        this.name = data.name;
        this.answer = data.name1;
        this.questionTypeId = data.questionTypeId;
        this.options = [];
        data.options.forEach(o => {
            this.options.push(new Option(o));
        });
    }
}
