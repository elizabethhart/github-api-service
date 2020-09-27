import React from "react";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom";
import Detail from "..";

jest.mock("react-i18next", () => ({
    useTranslation: () => ({ t: (key: string) => key })
}));

describe("<Detail />", () => {
    const mockRepository = {
        id: 1,
        full_name: "facebook/react",
        name: "react",
        description: "description",
        url: "https://github.com/facebook/react",
        html_url: "https://github.com/facebook/react",
        open_issues_count: 10,
        owner: {
            login: "facebook"
        }
    };

    test("detail component renders repository content", () => {
        const { getByText } = render(<Detail repository={mockRepository} />);

        const title = getByText("react");

        expect(title).toBeVisible();
    });
});
