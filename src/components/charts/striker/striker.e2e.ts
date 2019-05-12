import { newSpecPage } from "@stencil/core/testing";
import { StrikerComponent } from "./striker";

describe("ms-striker", () => {
  it("renders", async () => {
    const page = await newSpecPage({
      components: [StrikerComponent],
      html: `<ms-striker></ms-striker>`,
    });

    expect(page.root).toHaveClass("hydrated");
  });
});
