import { Component, Prop, State, Event, EventEmitter } from "@stencil/core";
import { processSkills, renderLevelControls, toSkillChangeEventObject } from "../class-chart-helpers";
import { ISkill } from "../../../global/values/_skillValues.interfaces";
import * as AssassinSkills from "../../../global/values/assassin";

@Component({
  tag: "ms-assassin",
  styleUrls: ["assassin.css"],
  shadow: true
})
export class AssassinComponent {

  @Prop({ reflectToAttr: true }) editable: boolean = false;
  @Prop() extras: boolean = false;

  @Prop({ mutable: true }) darkCloak: number = AssassinSkills.DarkCloak.minLevel;
  @Prop({ mutable: true }) dash: number = AssassinSkills.Dash.minLevel;
  @Prop({ mutable: true }) deathSentence: number = AssassinSkills.DeathSentence.minLevel;
  @Prop({ mutable: true }) fatalStrikes: number = AssassinSkills.FatalStrikes.minLevel;
  @Prop({ mutable: true }) fragmentedStar: number = AssassinSkills.FragmentedStar.minLevel;
  @Prop({ mutable: true }) luckyStars: number = AssassinSkills.LuckyStars.minLevel;
  @Prop({ mutable: true }) markOfDeath: number = AssassinSkills.MarkOfDeath.minLevel;
  @Prop({ mutable: true }) mirrorImageDarkBlade: number = AssassinSkills.MirrorImageDarkBlade.minLevel;
  @Prop({ mutable: true }) shadowArts: number = AssassinSkills.ShadowArts.minLevel;
  @Prop({ mutable: true }) shadowBurst: number = AssassinSkills.ShadowBurst.minLevel;
  @Prop({ mutable: true }) shadowChaser: number = AssassinSkills.ShadowChaser.minLevel;
  @Prop({ mutable: true }) shadowCutter: number = AssassinSkills.ShadowCutter.minLevel;
  @Prop({ mutable: true }) shadowWeb: number = AssassinSkills.ShadowWeb.minLevel;
  @Prop({ mutable: true }) soulGrind: number = AssassinSkills.SoulGrind.minLevel;
  @Prop({ mutable: true }) starChaser: number = AssassinSkills.StarChaser.minLevel;
  @Prop({ mutable: true }) starFlurry: number = AssassinSkills.StarFlurry.minLevel;
  @Prop({ mutable: true }) thrownWeaponMastery: number = AssassinSkills.ThrownWeaponMastery.minLevel;

  @State() skills: { [prop: string]: { locked: boolean, required: string, active: boolean } };

  @Event({ eventName: "skillchanged"}) onSkillChanged: EventEmitter;

  componentWillLoad() {
    processSkills(this, AssassinSkills);
  }

  async levelChanged(skill: ISkill, level: number) {
    this[skill.prop] = level;

    processSkills(this, AssassinSkills);

    this.onSkillChanged.emit(toSkillChangeEventObject(this, AssassinSkills));
  }

  render() {
    return (
      <ms-chart msClass="assassin">
        { renderLevelControls(this, AssassinSkills, this.editable, this.extras) }
      </ms-chart>
    );
  }
}
