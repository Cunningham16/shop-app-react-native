import { FC } from "react"
import { TouchableOpacity, View, Text, TouchableHighlight } from "react-native"
import { DefaultPalette, Metropolis } from "shared/types/constants"
import styled from "styled-components/native"

interface Props {
    title: string,
    size: "big" | "small",
    disabled: boolean
}

export const Primary: FC<Props> = ({ size, title, disabled }) => {
    const ButtonContainer = styled(View)`
        display: flex;
        height: 48px;
        border-radius: 25px;
        justify-content: center;
        align-items: center;
        width: ${size === "big" ? "343px" : "160px"};
        background-color: ${disabled ? "#DB3022E5" : DefaultPalette.PRIMARY};
        elevation: ${disabled ? "0" : "5"};
    `

    const ButtonText = styled(Text)`
        color: ${DefaultPalette.WHITE};
        font-family: ${Metropolis.MEDIUM};
        font-size: 14px;
        line-height: 20px;
        text-align: center;
    `

    return (
        <TouchableOpacity disabled={disabled} activeOpacity={0.5}>
                <ButtonContainer>
                    <ButtonText>
                        {title}
                    </ButtonText>
                </ButtonContainer>
        </TouchableOpacity>
    )
}