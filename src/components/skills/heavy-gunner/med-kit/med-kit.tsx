import { Component, Prop } from "@stencil/core";
import { MedKitValues } from "../../../../global/values/heavy-gunner";

@Component({
  tag: "ms-med-kit",
  styleUrls: ["../../skills.scss", "med-kit.scss"],
  shadow: true
})
export class MedKitComponent {

  @Prop({ reflectToAttr: true }) level: number = MedKitValues.minLevel;

  @Prop({ reflectToAttr: true }) private max: number = MedKitValues.maxLevel;

  getRequirements(): string[] {
    return [
      `Level ${ MedKitValues.levelRequirement[this.level] }+`,
    ];
  }

  render() {
    return [
      <ms-icon name="med-kit"></ms-icon>,
      <ms-skill-overlay heading="Med Kit"
                        level={ this.level }
                        type="Physical"
                        requirements={ this.getRequirements() }
                        cooldown={ 20 }
                        max={ this.max }>
        <ms-icon slot="icon" name="med-kit"></ms-icon>
        <div slot="description">
          Drop a first aid kit that you or an ally can pick up after <span>1</span> sec to instantly
          restore <span>{ MedKitValues.health[this.level] }</span> health.
        </div>
      </ms-skill-overlay>
    ];
  }
}