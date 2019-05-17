import { EventEmitter } from "..\..\..\stencil.core";
import { IChart, IChartSkills } from "../class-chart-helpers";
import { ISkill } from "../../../global/values/_skillValues.interfaces";
export declare class ArcherComponent implements IChart {
    host: HTMLMsArcherElement;
    editable: boolean;
    extras: boolean;
    agileArcher: number;
    arrowBarrage: number;
    arrowStorm: number;
    arrowStream: number;
    bowSwing: number;
    bronzeEagle: number;
    conditioning: number;
    eagleClaw: number;
    eagleGlide: number;
    eaglesMajesty: number;
    evasiveSalvo: number;
    iceArrow: number;
    precisionShooter: number;
    rapidShot: number;
    screwdriverShot: number;
    sharpEyes: number;
    snipe: number;
    skills: IChartSkills;
    onSkillChanged: EventEmitter;
    componentWillLoad(): void;
    getData(): Promise<import("../skill-change-event").ISkillChangeEvent>;
    levelChanged(skill: ISkill, level: number): void;
    emitChangeEvent(): void;
    render(): any[];
}
