import { Component, Prop } from "@stencil/core";
import { CrossCutValues } from "../../../../global/values/knight";

@Component({
  tag: "ms-cross-cut",
  styleUrls: ["../../skills.scss", "cross-cut.scss"],
  shadow: true
})
export class CrossCutComponent {

  @Prop({ reflectToAttr: true }) level: number = CrossCutValues.minLevel;

  @Prop({ reflectToAttr: true }) private max: number = CrossCutValues.maxLevel;

  getRequirements(): string[] {
    if (CrossCutValues.levelRequirement[this.level] > 0) {
      return [
        `Level ${ CrossCutValues.levelRequirement[this.level] }+`,
      ];
    }
  }

  render() {
    return [
      <ms-icon name="cross-cut"></ms-icon>,
      <ms-skill-overlay heading="Cross Cut"
                        level={ this.level }
                        type="Close Range / Physical"
                        weaponRequired="Main Hand Longsword"
                        requirements={ this.getRequirements() }
                        max={ this.max }>
        <ms-icon slot="icon" name="cross-cut"></ms-icon>
        <div slot="description">
          A swing of your sword deals <span>{ CrossCutValues.damage[this.level] }%</span> damage <span>2</span> times
          to <span>5</span> enemies up to <span>3</span> m in front of you.
        </div>
      </ms-skill-overlay>
    ];
  }
}
