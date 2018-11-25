import { Component, Prop } from "@stencil/core";
import { IronShieldValues } from "../../../../global/values/knight";

@Component({
  tag: "ms-iron-shield",
  styleUrls: ["../../skills.scss", "iron-shield.scss"],
  shadow: true
})
export class IronShieldComponent {

  @Prop({ reflectToAttr: true }) level: number = IronShieldValues.minLevel;

  @Prop({ reflectToAttr: true }) private max: number = IronShieldValues.maxLevel;

  getRequirements(): string[] {
    return [
      `Level ${ IronShieldValues.levelRequirement[this.level] }+`,
    ];
  }

  render() {
    return [
      <ms-icon name="iron-shield"></ms-icon>,
      <ms-skill-overlay heading="Iron Shield"
                        level={ this.level }
                        weaponRequired="Off-hand Shield"
                        requirements={ this.getRequirements() }
                        max={ this.max }>
        <ms-icon slot="icon" name="iron-shield"></ms-icon>
        <div slot="description">
          Adopt a defensive stance with your shield, reducing incoming damage
          by <span>{ IronShieldValues.reduction[this.level] }%</span>.
          The skill lasts while the skill key is held down,
          although powerful attacks may break the skill early.
          This skill can cancel other skills.
          In PvP zones, the damage reduction is halved.
        </div>
      </ms-skill-overlay>
    ];
  }
}
