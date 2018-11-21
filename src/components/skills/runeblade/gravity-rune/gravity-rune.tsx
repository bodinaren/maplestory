import { Component, Prop } from "@stencil/core";
import { GravityRuneValues } from "../../../../global/values/runeblade";

@Component({
  tag: "ms-gravity-rune",
  styleUrls: ["../../skills.scss", "gravity-rune.scss"],
  shadow: true
})
export class GravityRuneComponent {

  @Prop({ reflectToAttr: true }) level: number = GravityRuneValues.minLevel;

  @Prop({ reflectToAttr: true }) private max: number = GravityRuneValues.maxLevel;

  getRequirements(): string[] {
    return [
      `Level ${ GravityRuneValues.levelRequirement[this.level] }+`,
    ];
  }

  render() {
    return [
      <ms-icon name="gravity-rune"></ms-icon>,
      <ms-skill-overlay heading="¤¤¤¤"
                        level={ this.level }
                        type="Long Range / Magic"
                        requirements={ this.getRequirements() }
                        cooldown={ 10 }
                        max={ this.max }>
        <ms-icon slot="icon" name="gravity-rune"></ms-icon>
        <div slot="description">
          Summon a rune <span>3</span> m in front of you. The rune pulls enemies into it,
          dealing <span>{ GravityRuneValues.damage[this.level] }%</span> damage
          to <span>8</span> enemies within <span>3.75</span> m.
        </div>
      </ms-skill-overlay>
    ];
  }
}