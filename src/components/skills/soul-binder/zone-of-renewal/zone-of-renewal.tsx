import { Component, Prop } from "@stencil/core";
import { ZoneOfRenewalValues } from "../../../../global/values/soul-binder";

@Component({
  tag: "ms-zone-of-renewal",
  styleUrls: ["../../skills.scss", "zone-of-renewal.scss"],
  shadow: true
})
export class ZoneOfRenewalComponent {

  @Prop({ reflectToAttr: true }) level: number = ZoneOfRenewalValues.minLevel;

  @Prop({ reflectToAttr: true }) private max: number = ZoneOfRenewalValues.maxLevel;

  getRequirements(): string[] {
    return [
      `Level ${ ZoneOfRenewalValues.levelRequirement[this.level] }+`,
      `AgileArcher [Level 3+]`,
    ];
  }

  render() {
    return [
      <ms-icon name="zone-of-renewal"></ms-icon>,
      <ms-skill-overlay heading="¤¤¤¤"
                        level={ this.level }
                        type="Long Range / Magic"
                        weaponRequired="Two-handed Orb"
                        requirements={ this.getRequirements() }
                        spirit={ 0000 }
                        cooldown={ 0000 }
                        max={ this.max }>
        <ms-icon slot="icon" name="zone-of-renewal"></ms-icon>
        <div slot="description">
          Swing your bow wildly as you spin,
          dealing <span>{ ZoneOfRenewalValues.damage[this.level] }%</span> damage
          to <span>8</span> enemies within <span>3</span> m. Deals an
          additional <span>{ ZoneOfRenewalValues.additionalDamage[this.level] }%</span> ice damage
          to targets frozen by the Ice Arrow debuff and consumes the effect.
        </div>
      </ms-skill-overlay>
    ];
  }
}