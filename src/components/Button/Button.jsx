import css from 'components/Button/Button.module.css'

export const Button = (props) => {
    const { loadMore } = props
    return (
        <button onClick={loadMore} type="button" className={css.Button}>
      Load More
    </button>
    )

}