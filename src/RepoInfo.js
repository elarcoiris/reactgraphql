const RepoInfo = ({ repo }) => {
    let licence;
    switch (repo.licenceInfo?.spdxId) {
        case undefined:
            licence = (
                <span className="px-1 py-0 ms-1 d-inline-block btn btn-sm btn-danger"
                        style={{ fontsize: ".6em" }}>
                    NO LICENCE
                </span>
            );
            break;
        case "NOASSERTION":
            licence = (
                <span className="px-1 py-0 ms-1 d-inline-block btn btn-sm btn-warning"
                        style={{ fontsize: ".6em" }}>
                    {repo.licenceInfo?.spdxId}
                </span>
            );
            break;
            default: 
            licence = (
                <span className="px-1 py-0 ms-1 d-inline-block btn btn-sm btn-outline-success"
                        style={{ fontsize: ".6em" }}>
                    {repo.licenceInfo?.spdxId}
                </span>
            );
            break;
    }
    return (
        <li className="list-group-item" key={repo.id.toString()}>
            <div className="d=flex justify-content-between align-items-center">
                <div className="d-flex flex-column">
                    <a className="h5 mb-0 text-decoration-none" href={repo.url}>
                        {repo.name}
                    </a>
                    <p className="small">{repo.description}</p>
                </div>
                <div className="text-nowrap ms-3">
                    {licence}
                    <span className={
                        "px-1 py-1 ms-1 d-inline-block btn btn-sm" +
                        (repo.viewSubscription === "SUBSCRIBED"
                            ? "btn-success"
                            : "btn-outline-secondary"
                        )
                    }
                        style={{ fontsize: ".6em" }}>
                        {repo.viewSubscription}
                    </span>
                </div>
            </div>
        </li>
    );
}
export default RepoInfo;