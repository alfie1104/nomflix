import React from "react";
import DetailPresenter from "./DetailPresenter";

export default class extends React.Component {
    state = {
        result: null,
        error: null,
        loading: true
    };

    async componentDidMount() {
        const {
            match: {
                params: {
                    id
                }
            },
            history: { push }
        } = this.props;
        const parsedId = parseInt(id);
        if (isNaN(parsedId)) {
            return push("/"); //push("/")를 통해 사용자를 홈 화면으로 보내고, 함수를 종료시킴(return)
        }
    }

    render() {
        const { result, error, loading } = this.state;
        return (
            <DetailPresenter
                result={result}
                error={error}
                loading={loading}
            />
        );
    }
}