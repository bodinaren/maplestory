import { EventEmitter } from "..\..\..\stencil.core";
import { IChart, IChartSkills } from "../class-chart-helpers";
import { ISkill } from "../../../global/values/_skillValues.interfaces";
export declare class HeavyGunnerComponent implements IChart {
    host: HTMLMsHeavyGunnerElement;
    editable: boolean;
    extras: boolean;
    advancedBullets: number;
    advancedMissiles: number;
    advancedPulseWeapons: number;
    blastChargeKit: number;
    bulletSpray: number;
    electricBlast: number;
    gatlingFire: number;
    homingMissiles: number;
    jetBoots: number;
    lockOn: number;
    magneticBomb: number;
    mBomb: number;
    medKit: number;
    reload: number;
    rocketLauncher: number;
    stunGrenades: number;
    suborbitalBombardment: number;
    skills: IChartSkills;
    onSkillChanged: EventEmitter;
    componentWillLoad(): void;
    getData(): Promise<import("../skill-change-event").ISkillChangeEvent>;
    levelChanged(skill: ISkill, level: number): void;
    emitChangeEvent(): void;
    render(): any;
}
