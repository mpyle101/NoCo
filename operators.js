const fetchWorkoutsEpic = action$ =>
    action$.pipe(
        ofType(SELECT_DATE, SELECT_PERIOD),
        debounceTime(200),
        switchMap(({ payload: { date, period } }) => 
            fetchWorkouts(date, period).pipe(
            map(resp => process(resp)),
            map(workouts => fetchWorkoutsSuccess(workouts)),
            takeUntil(action$.pipe(ofType(FETCH_WORKOUTS_CANCEL))),
            catchError(err => observableOf(fetchWorkoutsFailure(err.message)))
        ))
    )
