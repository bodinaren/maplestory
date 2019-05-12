import { h, Component, Prop, State, Event, EventEmitter, Method, Watch } from "@stencil/core";
import { IChart, IChartSkills, processSkills, renderLevelControls, toSkillChangeEventObject } from "../class-chart-helpers";
import { ISkill } from "../../../global/values/_skillValues.interfaces";
import * as StrikerSkills from "../../../global/values/striker";

@Component({
  tag: "ms-striker",
  styleUrls: ["striker.css"],
  shadow: true
})
export class StrikerComponent implements IChart {

  @Prop({ reflectToAttr: true }) editable: boolean = false;
  @Prop() extras: boolean = false;

  @Prop({ mutable: true }) beatdown: number = StrikerSkills.Beatdown.minLevel;
  @Prop({ mutable: true }) dragonKick: number = StrikerSkills.DragonKick.minLevel;
  @Prop({ mutable: true }) fightingSpirit: number = StrikerSkills.FightingSpirit.minLevel;
  @Prop({ mutable: true }) fistsOfFury: number = StrikerSkills.FistsOfFury.minLevel;
  @Prop({ mutable: true }) giganticBurst: number = StrikerSkills.GiganticBurst.minLevel;
  @Prop({ mutable: true }) guardDash: number = StrikerSkills.GuardDash.minLevel;
  @Prop({ mutable: true }) guillotine: number = StrikerSkills.Guillotine.minLevel;
  @Prop({ mutable: true }) hurricaneCutter: number = StrikerSkills.HurricaneCutter.minLevel;
  @Prop({ mutable: true }) kickTechnician: number = StrikerSkills.KickTechnician.minLevel;
  @Prop({ mutable: true }) knuckleMissile: number = StrikerSkills.KnuckleMissile.minLevel;
  @Prop({ mutable: true }) magnumBlow: number = StrikerSkills.MagnumBlow.minLevel;
  @Prop({ mutable: true }) maharPunch: number = StrikerSkills.MaharPunch.minLevel;
  @Prop({ mutable: true }) overcome: number = StrikerSkills.Overcome.minLevel;
  @Prop({ mutable: true }) paceControl: number = StrikerSkills.PaceControl.minLevel;
  @Prop({ mutable: true }) patternBreak: number = StrikerSkills.PatternBreak.minLevel;
  @Prop({ mutable: true }) powerPuncher: number = StrikerSkills.PowerPuncher.minLevel;
  @Prop({ mutable: true }) risingKick: number = StrikerSkills.RisingKick.minLevel;

  @State() skills: IChartSkills;

  @Event({ eventName: "skillchanged"}) onSkillChanged: EventEmitter;

  componentWillLoad() {
    processSkills(this, StrikerSkills);
  }

  @Method()
  async getData() {
    return toSkillChangeEventObject(this, StrikerSkills);
  }

  levelChanged(skill: ISkill, level: number) {
    this[skill.prop] = level;

    processSkills(this, StrikerSkills, skill);

    this.emitChangeEvent();
  }

  @Watch("extras")
  emitChangeEvent(): void {
    this.onSkillChanged.emit(toSkillChangeEventObject(this, StrikerSkills));
  }

  render() {
    return (
      <ms-chart msClass="striker">
        { renderLevelControls(this, StrikerSkills, this.editable, this.extras) }
      </ms-chart>
    );
  }
}
