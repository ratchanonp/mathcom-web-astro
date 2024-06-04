import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

export const QueryProviderHoc = (Component: React.FC) => {
	const queryClient = new QueryClient();

	const newComp = () => {
		return (
			<QueryClientProvider client={queryClient}>
				<Component />
			</QueryClientProvider>
		);
	};

	return newComp;
};
