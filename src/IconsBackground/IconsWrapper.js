import React from 'react';
import { useSpring } from '@react-spring/web';
import iconList from '../PortfolioIntro/helpers/iconList';
import ReactTooltip from 'react-tooltip';
import { IconDiv, IconsBackground } from './IconsWrapper.styles';

const calc = (x, y) => [x - window.innerWidth / 2, y - window.innerHeight / 2];
const trans1 = (x, y) => `translate3d(${x / 500}%,${y / 500}%,0)`;

function IconsHandler() {
    const [props, set] = useSpring(() => ({
        xy     : [0, 0],
        config : {
            mass     : 15,
            tension  : 550,
            friction : 140,
        },
    }));

    const positions = [
        ['10%', '10%'], /* ['30%', '10%'], */ ['49%', '10%'], /* ['70%', '10%'], */ ['87%', '10%'],
        /* ['10%', '20%'], */ ['30%', '20%'], /* ['50%', '20%'], */ ['70%', '20%'], /* ['90%', '20%'], */
        ['10%', '30%'], /* ['30%', '30%'], */ ['49%', '27%'], /* ['70%', '30%'], */ ['87%', '30%'],
        /* ['10%', '40%'], */ ['30%', '40%'], /* ['50%', '40%'], */ ['70%', '40%'], /* ['90%', '40%'], */
        ['10%', '50%'], /* ['30%', '50%'], */ /* ['50%', '50%'], ['70%', '50%'], */ ['87%', '50%'],
        /* ['10%', '60%'], */ ['30%', '60%'], /* ['50%', '60%'], */ ['70%', '60%'], /* ['90%', '60%'], */
        ['10%', '70%'], /* ['30%', '70%'], */ ['49%', '70%'], /* ['70%', '70%'], */ ['87%', '70%'],
        /* ['10%', '80%'], */ ['30%', '80%'], /* ['50%', '80%'], */ ['70%', '80%'], /* ['90%', '80%'], */
        ['10%', '90%'], /* ['30%', '90%'], */ /* ['49%', '90%'], ['70%', '90%'], */ ['87%', '90%'],

    ];

    let accumulatedIndex = 0;
    const handleLeftTop = () => {
        const left = positions[accumulatedIndex][0];
        const top = positions[accumulatedIndex][1];
        accumulatedIndex++;
        return { left, top };
    };

    return (
        <IconsBackground
            onMouseMove={({ clientX: x, clientY: y }) => set.start({ xy: calc(x, y) })}
            onMouseLeave={() => set.start({ xy: [0, 0] })}
            style={{
                transform: props.xy.to((x, y) => trans1(x, y)),
            }}
        >
            <ReactTooltip effect="solid" delayShow={250} />
            {iconList.tecnologies.map((item) => {
                const { left, top } = handleLeftTop();
                return (
                    <IconDiv
                        style={{
                            // transform: props.xy.to((x, y) => trans1(x, y)),
                            top,
                            left,
                        }}
                        key={item.name}
                        data-tip={item.name}
                        color={item.color}
                    >
                        <item.icon icon={item.icon} color={item.color} />
                    </IconDiv>
                );
            })}
            {iconList.tools.map((item, index) => {
                const { left, top } = handleLeftTop(index);
                return (
                    <IconDiv
                        style={{
                            // transform: props.xy.to((x, y) => trans1(x, y)),
                            top,
                            left,
                        }}
                        key={item.name}
                        data-tip={item.name}
                        color={item.color}
                    >
                        <item.icon icon={item.icon} color={item.color} />
                    </IconDiv>
                );
            })}
            {iconList.cryptocurrencies.map((item, index) => {
                const { left, top } = handleLeftTop(index);
                return (
                    <IconDiv
                        style={{
                            // transform: props.xy.to((x, y) => trans1(x, y)),
                            top,
                            left,
                        }}
                        key={item.name}
                        color={item.color}
                        data-tip={item.name}
                    >
                        <item.icon />
                    </IconDiv>
                );
            })}
        </IconsBackground>
    );
}

export default IconsHandler;

