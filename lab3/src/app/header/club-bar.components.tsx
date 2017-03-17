import * as React from "react";

type clubLinks = {
    logo: string;
    link: string;
}

interface ClubBarProps  {
    clubArray: clubLinks[]
}

const InitialClubArray = [
    {
        "logo": "/images/clubs/ferrari.svg",
        "link": "/ferrari"
    }
]

const ClubBarComponent = ({clubArray = InitialClubArray}: ClubBarProps) => (
    <div>
        <ul>
            {clubArray &&
                clubArray.map((club, index) => (
                    <li key={index}>
                        <a href={club.link}>
                            <img src={club.logo} alt="ferrari"/>
                        </a>
                    </li>
                ))
            }
        </ul>
    </div>
)

export default ClubBarComponent;