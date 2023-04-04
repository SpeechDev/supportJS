import MyComponent2 from './myComponent2'

export const MyComponent = props => {
    return (
        <div>
           <MyComponent2 title={props.title}></MyComponent2>
        </div>
    );
};