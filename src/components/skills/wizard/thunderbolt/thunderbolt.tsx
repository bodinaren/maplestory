import { Component, Prop } from "@stencil/core";
import { ThunderboltValues } from "../../../../global/values/wizard";

@Component({
  tag: "ms-thunderbolt",
  styleUrls: ["../../skills.scss", "thunderbolt.scss"],
  shadow: true
})
export class ThunderboltComponent {

  @Prop({ reflectToAttr: true }) level: number = ThunderboltValues.minLevel;

  @Prop({ reflectToAttr: true }) private max: number = ThunderboltValues.maxLevel;

  getRequirements(): string[] {
    return [
      `Level ${ ThunderboltValues.levelRequirement[this.level] }+`,
      `Shadow Cutter [Level 4+]`,
    ];
  }

  render() {
    return [
      <ms-icon name="thunderbolt"></ms-icon>,
      <ms-skill-overlay heading="¤¤¤¤"
                        element="¤¤¤¤"
                        level={ this.level }
                        type="¤¤¤¤"
                        weaponRequired="¤¤¤¤"
                        requirements={ this.getRequirements() }
                        spirit={ 11111 }
                        cooldown={ 11111 }
                        max={ this.max }>
        <ms-icon slot="icon" name="thunderbolt"></ms-icon>
        <div slot="description">
          Gather a bolt of electricity to throw at the closest enemy up to <span>8</span> m in front of you,
          dealing <span>{ ThunderboltValues.damage[this.level] }%</span> electric damage.
          The bolt bounces up to <span>8</span> times within <span>5</span> m,
          but won't hit the same target twice in a row. Consumes <span>40</span> spirit.
        </div>
      </ms-skill-overlay>
    ];
  }
}