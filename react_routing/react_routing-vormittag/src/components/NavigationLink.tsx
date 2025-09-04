import { NavLink } from 'react-router'

interface NavigationLinkProps {
  to: string
  text: string
}

export default function NavigationLink(props: NavigationLinkProps) {
  return (
    <NavLink
      className={(state) =>
        `p-2  ${state.isActive ? 'bg-amber-300' : 'bg-green-300'}`
      }
      to={props.to}
    >
      {props.text}
    </NavLink>
  )
}
