// Import the necessary library
import React from 'react';

// Import Helpers function
import { calcTime, convertMoney } from "../../helpers";

// Import the style component
import { Wrapper, Content } from './MovieInfoBar.styles';

// Types
type Props = {
    time: number;
    budget: number;
    revenue: number;
}

// Create MovieInfoBar component
const MovieInfoBar: React.FC<Props> = ({ time, budget, revenue }) => (
    <Wrapper>
        <Content>
            <div className="column">
                <p>Running time: {calcTime(time)}</p>
            </div>
            <div className="column">
                <p>Budget: {convertMoney(budget)}</p>
            </div>
            <div className="column">
                <p>Revenue: {convertMoney(revenue)}</p>
            </div>
        </Content>
    </Wrapper>
)

// Export the component
export default MovieInfoBar;