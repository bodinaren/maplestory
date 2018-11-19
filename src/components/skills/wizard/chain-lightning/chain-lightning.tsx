import { Component, Prop } from "@stencil/core";
import { ChainLightningValues } from "../../../../global/values/wizard";

@Component({
  tag: "ms-chain-lightning",
  styleUrls: ["../../skills.scss", "chain-lightning.scss"],
  shadow: true
})
export class ChainLightningComponent {

  @Prop({ reflectToAttr: true }) level: number = ChainLightningValues.minLevel;

  @Prop({ reflectToAttr: true }) private max: number = ChainLightningValues.maxLevel;

  getRequirements(): string[] {
    return [
      `Level ${ ChainLightningValues.levelRequirement[this.level] }+`,
      `Shadow Cutter [Level 4+]`,
    ];
  }

  render() {
    return [
      <ms-icon name="chain-lightning"></ms-icon>,
      <ms-skill-overlay heading="¤¤¤¤"
                        element="¤¤¤¤"
                        level={ this.level }
                        type="¤¤¤¤"
                        weaponRequired="¤¤¤¤"
                        requirements={ this.getRequirements() }
                        spirit={ 11111 }
                        cooldown={ 11111 }
                        max={ this.max }>
        <ms-icon slot="icon" name="chain-lightning"></ms-icon>
        <div slot="description">
          Release an intense electric load that
          deals <span>{ ChainLightningValues.damage[this.level] }%</span> electric damage
          to 8 enemies up to <span>8</span> m in front of you.
          Enemies hit with this skill <span>5</span> times pulse with electric energy,
          attracting a bolt that deals an
          additional <span>{ ChainLightningValues.additionalDamage[this.level] }%</span> electric damage.
          Consumes <span>15</span> spirit.
        </div>
      </ms-skill-overlay>
    ];
  }
}