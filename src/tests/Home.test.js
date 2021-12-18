import renderWithRouter from "../helper/renderWithRouter";
import userEvent from "@testing-library/user-event";
import App from "../App";

describe("Testa o comportamento dos cliques para cada rota definida", () => {
	it("Verifica se, ao clicar no link About, somos redirecionados para o componente About", () => {
		const { getByRole, history } = renderWithRouter(<App />);
		const aboutLink = getByRole("link", { name: /sobre mim/i });

		expect(aboutLink).toBeDefined();

		userEvent.click(aboutLink);

		expect(history.location.pathname).toBe("/about");
	});

	it("Verifica se, ao clicar no link Contact, somos redirecionados para o componente Contact", () => {
		const { getByRole, history } = renderWithRouter(<App />);
		const contactLink = getByRole("link", { name: /contato/i });

		expect(contactLink).toBeDefined();

		userEvent.click(contactLink);

		expect(history.location.pathname).toBe("/contact");
	});

	it("Verifica se, ao clicar no link Home, somos redirecionados para o componente Home", () => {
		const { getByAltText, history } = renderWithRouter(<App />);
		const homeLink = getByAltText(/home/i);

		expect(homeLink).toBeDefined();

		userEvent.click(homeLink);

		expect(history.location.pathname).toBe("/");
	});

	it("Verifica se, ao clicar no link Work, somos redirecionados para o componente Work", () => {
		const { getByRole, history } = renderWithRouter(<App />);
		const workLink = getByRole("link", { name: /projetos/i });

		expect(workLink).toBeDefined();

		userEvent.click(workLink);

		expect(history.location.pathname).toBe("/work");
	});
});
