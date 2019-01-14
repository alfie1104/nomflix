import React from "react";
import DetailPresenter from "./DetailPresenter";
import { moviesApi, tvApi } from "../../api";

export default class extends React.Component {
    constructor(props) {
        super(props);
        const { location: { pathname } } = props;
        this.state = {
            result: null,
            error: null,
            loading: true,
            isMovie: pathname.includes("/movie/") //movie 페이지인지 확인해서 this.isMovie값을 변경. 화면을 rerender하지 않기 위해 state에 넣지 않음
        };
    }

    async componentDidMount() {
        const {
            match: {
                params: {
                    id
                }
            },
            history: { push },
        } = this.props;

        const { isMovie } = this.state;
        const parsedId = parseInt(id);
        if (isNaN(parsedId)) {
            return push("/"); //push("/")를 통해 사용자를 홈 화면으로 보내고, 함수를 종료시킴(return)
        }

        let result = null;

        try {
            if (isMovie) {
                const request = await moviesApi.movieDetail(parsedId);
                result = request.data;
            } else {
                const request = await tvApi.showDetail(parsedId);
                result = request.data;
            }

            console.log(result);
        } catch{
            this.setState({ error: "Can't find anything." });
        } finally {
            this.setState({ loading: false, result });
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