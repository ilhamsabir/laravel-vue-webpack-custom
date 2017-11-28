@extends('layouts.main')

@section('content')
<div class="container-fluid">
  <div class="row">

    @include('app.sidebar')
    
    <main class="col-sm-9 offset-sm-3 col-md-10 offset-md-2 pt-3">
      <h1>Dashboard</h1>
      <h2>Section title</h2>
      <div class="table-responsive">

      </div>
    </main>
  </div>
</div>
@endsection
