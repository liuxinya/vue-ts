import { Injectable } from "../../decorators/injectable";
import { isProd } from '../../helpers/env';

@Injectable
export class UEnv {
    prod: boolean = isProd();
}