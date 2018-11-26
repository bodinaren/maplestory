import { Component, Prop } from "@stencil/core";
import { ShieldWallValues } from "../../../../global/values/knight";

@Component({
  tag: "ms-shield-wall",
  styleUrls: ["../../skills.scss", "shield-wall.scss"],
  shadow: true
})
export class ShieldWallComponent {

  @Prop({ reflectToAttr: true }) level: number = ShieldWallValues.minLevel;

  @Prop({ reflectToAttr: true }) private max: number = ShieldWallValues.maxLevel;

  getRequirements(): string[] {
    return [
      `Level ${ ShieldWallValues.levelRequirement[this.level] }+`,
    ];
  }

  render() {
    return [
      <ms-icon name="shield-wall"></ms-icon>,
      <ms-skill-overlay heading="Shield Wall"
                        element="Holy"
                        level={ this.level }
                        weaponRequired="Off-hand Shield"
                        requirements={ this.getRequirements() }
                        cooldown={ 45 }
                        max={ this.max }>
        <ms-icon slot="icon" name="shield-wall"></ms-icon>
        <div slot="description">
          Create a <span>3</span> m holy field around you for <span>10</span> sec,
          increasing the physical resistance and magic resistance of <span>10</span> allies,
          including yourself, by <span>{ ShieldWallValues.resistance[this.level] }</span>.
        </div>
      </ms-skill-overlay>
    ];
  }
}