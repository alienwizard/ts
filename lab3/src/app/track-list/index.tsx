import * as React from "react"
import { asyncComponent } from 'react-async-component';

export default asyncComponent({
  resolve: () => System.import('./track-list.component')
  .catch(
        console.error.bind(console)
    ),
  ErrorComponent: ({ error }) => <div>{error.message}</div>

});