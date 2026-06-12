async function loadCommissionStatus() {
    const res = await fetch(
        "https://opensheet.elk.sh/1pH6PvdUPBmgcI9CzBaNRL9rvBNhbZqJlNhnOnu481yI/1"
    );

    const data = await res.json();

    const status = data[0].status;

    const element =
        document.getElementById("commission-status");

    element.textContent =
        status === "OPEN"
            ? "🟢COMMISSIONS OPEN"
            : "🔴COMMISSIONS CLOSED";

    element.className =
        status === "OPEN"
            ? "status-open"
            : "status-closed";
}

loadCommissionStatus();