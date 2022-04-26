function checkCurrentPage(path, page) {
	if (path === page) {
		return { color: "#44deb2" };
	}
	return { color: "##D3D1D1" };
}

export default checkCurrentPage;
