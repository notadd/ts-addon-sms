import { Repository } from "typeorm";
import { SmsLog } from "../entities/sms-log.entity";
import { SmsTemplate } from "../entities/sms-template.entity";
import { Sms } from "../entities/sms.entity";
import { SmsLogData } from "../interfaces/sms-log-info.interface";
import { SmsRequest } from "../interfaces/sms-request.interface";
import { SmsResponse } from "../interfaces/sms-response.interface";
import { ParamUtil } from "../utils/param.util";
import { QcloudService } from "./qcloud.service";
export declare class SmsService {
    private readonly qcloudService;
    private readonly paramUtil;
    private readonly smsRepository;
    private readonly smsTemplateRepository;
    private readonly smsLogRepository;
    constructor(qcloudService: QcloudService, paramUtil: ParamUtil, smsRepository: Repository<Sms>, smsTemplateRepository: Repository<SmsTemplate>, smsLogRepository: Repository<SmsLog>);
    createSms(sms: Sms): Promise<void>;
    addTemplateToSms(appId: number, smsTemplate: Array<SmsTemplate>): Promise<void>;
    deleteSms(appId: string): Promise<void>;
    deleteSmsTemplate(templateId: string): Promise<void>;
    updateSms(appId: string, newSignName: string, newValidationTime: number): Promise<void>;
    updateSmsTemplate(templateId: string, name: string, remark: string): Promise<void>;
    findOneSms(appId: string): Promise<Sms>;
    findAllSms(): Promise<Array<Sms>>;
    findOneSmsLog(templateId: string): Promise<Array<SmsLog>>;
    findAllSmsLog(): Promise<Array<SmsLogData>>;
    sendMessageByQCloud(smsRequest: SmsRequest): Promise<SmsResponse>;
    private saveSmsLog(isSuccess, responseCode, responseMessage, smsRequest, smsLog);
}
