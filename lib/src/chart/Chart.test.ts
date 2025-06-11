import { mount } from "@vue/test-utils";
import { describe, it, expect } from "vitest";
import Chart from "./Chart.vue";

describe("Chart", () => {
  it("renders without crashing", () => {
    const wrapper = mount(Chart, {
      props: { text: "Vue" },
    });

    expect(wrapper.text()).toContain("Vue");
  });
});
