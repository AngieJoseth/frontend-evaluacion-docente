import {State} from '../ignug/models.index';

export class EvaluationType {
    id?: number;
    parent_id?: EvaluationType;
    code: string;
    name: string;
    percentage: string;
    global_percentage: string;
    state?: State;

}